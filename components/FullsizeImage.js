export function FullsizeImage({src}) {
    return (
        <div className="fullsize-image">
            <img src={src}/>
        </div>
    )
}

//Background-image && background video


// export function FullsizeImage({src}) {
//     return (
//         <div className="fullsize-image">
//             <img src={src}/>
//         </div>
//     )
// }

// export function FullsizeImage({src}) {
//     return (
//         <div className="fullsize-image" style={{background: `url('${src}')`, backgroundPosition: 'center',backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
//         </div>
//     )
// }