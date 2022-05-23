import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'public/posts');

export function parse(obj) {
    const dateNow = new Date().toLocaleDateString().replace(/\//g, '-');;
    const id = new Date().getTime();
    const { laporan, ...rest } = obj
    const parseStr = matter.stringify(laporan, { id, date: dateNow, ...rest });
    return { date: `${dateNow}_${id}`, content: parseStr };
}

export async function save(obj) {
    const { date, content } = parse(obj);
    try {
        fs.writeFile(`./public/posts/${date}.md`, content, (err) => {
            if (err) throw err;
        });
        return true;
    } catch (error) {
        console.log(error.message);
        return false;
    }
}


export async function getPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '');

        // Read markdown file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // Use gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        };
    });
    return allPostsData;
    // Sort posts by date
    // return allPostsData.sort(({ date: a }, { date: b }) => {
    //     if (a < b) {
    //         return 1;
    //     } else if (a > b) {
    //         return -1;
    //     } else {
    //         return 0;
    //     }
    // });
}