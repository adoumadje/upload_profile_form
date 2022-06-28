const imgDiv = document.querySelector('.profile-pic-div')
const photo = document.getElementById('photo')
const file = document.getElementById('file')
const uploadBtn = document.getElementById('uploadBtn')

// hover 
imgDiv.addEventListener('mouseenter', () => {
    uploadBtn.style.display = 'block'
})

imgDiv.addEventListener('mouseleave', () => {
    uploadBtn.style.display = 'none'
})

// upload file
file.addEventListener('change', (e) => {
    const choosedFile = e.target.files[0]

    if(choosedFile) {
        const reader = new FileReader()
        
        reader.addEventListener('load', () => {
            photo.setAttribute('src', reader.result)
        })
        reader.readAsDataURL(choosedFile)
    }
})