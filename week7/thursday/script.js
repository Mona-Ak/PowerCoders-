const getWidthAndHeightFromDataUrl = dataURL => new Promise(resoleve =>{

    const img = new Image();
    img.onload = ()=>{
        resoleve({
            width: img.width,
            height: img.height
        });
    }
    imh.src = dataURL;
})


document.getElementById('submit').onclick = async () => {
    const file = document.querySelector('[type="file"]').files[0];


    if(!file){
        throw Error('You must specify a file, u donut');
    }

    const fileAsDetaURL = window.URL.createObjectURL(file); 

    const dimensions = await getWidthAndHeightFromDataUrl(fileAsDetaURL);

    console.log(dimensions);

}
