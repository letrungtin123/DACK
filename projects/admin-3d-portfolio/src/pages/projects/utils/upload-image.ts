import axios from 'axios'

const CLOUD_NAME = 'dalyt3bdn'
const FOLDER_NAME = 'marathon-fe'
const PRESET_NAME = 'marathon-fe'
const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

export const uploadImage = async (files: FileList ) => {
    const urls: string[] = []
    const formData = new FormData()
    formData.append('folder', FOLDER_NAME)
    formData.append('upload_preset', PRESET_NAME)

    for (const file of files) {
        formData.append('file', file)
        const response = await axios.post(UPLOAD_URL, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response)
        urls.push(response.data.url)
    }
    return urls
}