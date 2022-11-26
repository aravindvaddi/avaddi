import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'
import fs from 'fs'

const contentDirectory = path.join(process.cwd(), 'content')

export function getPageInfo() {

	const fileNames = fs.readdirSync(contentDirectory)
	const allContent = fileNames.map(fileName => {

		const page = fileName.replace(/\.md$/, '')

		const fullPath = path.join(contentDirectory, fileName)
		const fileContents = fs.readFileSync(fullPath, 'utf8')

		const matterResult = matter(fileContents)

		return {
			page,
			...matterResult.data
		}
	})

	return allContent.sort((a, b) => {
        return a.page.length - b.page.length
	})
}

export function getPageName() {
	const fileNames = fs.readdirSync(contentDirectory)

	return fileNames.map(fileName => {
		return {
			params: {
				page: fileName.replace(/\.md$/, '')
			}
		};
	});
}

export function getLinkName() {
	const fileNames = fs.readdirSync(contentDirectory)

	return fileNames.map(fileName => fileName.replace(/\.md$/, '')).sort((a, b) => a.length > b.length);
}

export async function getPageContent(name) {
	const fullPath = path.join(contentDirectory, `${name}.md`)
	const fileContents = fs.readFileSync(fullPath, 'utf8')

	const matterResult = matter(fileContents)

	const processedContent = await remark()
		.use(html)
		.process(matterResult.content)

	const contentHtml = processedContent.toString()

	return {
		name,
		contentHtml,
		...matterResult.data
	}
}