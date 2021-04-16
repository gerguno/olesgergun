import mime from 'mime-types'
import fs from 'fs'

export default async function fileServer(req, res) {
    const filename = 'Oles Gergun CV'
    const file = `././files/${filename}.pdf`

    const mimetype = mime.lookup(file)

    res.setHeader('Content-disposition', 'attachment; filename=' + filename)
    res.setHeader('Content-type', mimetype)

    const filestream = fs.createReadStream(file)
    filestream.pipe(res)
}

