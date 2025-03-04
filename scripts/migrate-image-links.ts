import * as fs from "fs/promises";
import * as path from "path";

async function findMarkdownFiles(dir: string): Promise<string[]> {
  const files: string[] = [];

  async function scanDir(directory: string) {
    const entries = await fs.readdir(directory, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(directory, entry.name);

      if (entry.isDirectory()) {
        await scanDir(fullPath);
      } else if (
        entry.isFile() &&
        (entry.name.endsWith(".md") || entry.name.endsWith(".mdx"))
      ) {
        files.push(fullPath);
      }
    }
  }

  await scanDir(dir);
  return files;
}

export async function migrateImageLinks() {
  try {
    console.log("Finding markdown files in /content directory...");
    const markdownFiles = await findMarkdownFiles("./content");
    console.log(`Found ${markdownFiles.length} markdown files`);

    let totalReplacements = 0;

    for (const filePath of markdownFiles) {
      try {
        // Read file content
        const content = await fs.readFile(filePath, "utf-8");

        // More robust regex that extracts src and alt regardless of other attributes
        const modifiedContent = content.replace(
          /<img[^>]*?\s+src=["']([^"']+)["'][^>]*?(?:\s+alt=["']([^"']*)["'][^>]*?)?(?:\/>|>)/gi,
          (match, src, alt) => {
            // If alt is undefined or empty, use filename in title case
            if (!alt) {
              const filename = path.basename(src, path.extname(src));
              alt = filename
                .replace(/[-_]/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase());
            }

            return `![${alt}](${src})`;
          }
        );

        // Write back to file if content changed
        if (content !== modifiedContent) {
          const replacements = (content.match(/<img/gi) || []).length;
          totalReplacements += replacements;
          await fs.writeFile(filePath, modifiedContent, "utf-8");
          console.log(`Updated: ${filePath} (${replacements} replacements)`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error);
      }
    }

    console.log(
      `Migration completed with ${totalReplacements} total replacements`
    );
  } catch (error) {
    console.error("Migration failed:", error);
  }
}

migrateImageLinks();
