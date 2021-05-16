export interface Blog {
    id?: number,
    title: string
    imgUrl: string
    content: string
  }


 export const BLOG_SAMPLE : Blog = {
    title: 'New blog about Shiba Inu',
    imgUrl: 'https://placedog.net/1000/1000?random',
    content:  `
    <h2>Shiba Inu - The smallest of the six original</h2>
    <p>The Shiba Inu is <span style="color: rgb(230, 0, 0);">the smallest of the six original and
            distinct spitz </span>breeds of dog from Japan. A small, agile dog that copes very well
        with
        mountainous terrain, the Shiba Inu was originally bred for hunting. Lorem Ipsum is simply
        dummy
        text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, </p>
    <ol>
        <li>when an unknown printer took a galley of type and scrambled it to make a type specimen
            book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s</li>
        <li> with the release of Letraset sheets containing Lorem Ipsum passages, and more recently
            with
            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</li>
    </ol>
    `
  }
