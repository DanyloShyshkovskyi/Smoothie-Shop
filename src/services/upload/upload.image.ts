import {ChangeEvent, Dispatch, SetStateAction} from "react";
import {getDownloadURL, ref, uploadBytesResumable} from "firebase/storage";
import {storage} from "../firebase/firebase.config";

export const uploadImage = (e: ChangeEvent<HTMLInputElement>, loading: Dispatch<SetStateAction<boolean>>, imageSend: (url: string) => void) => {
    const fileList = e.target.files
    loading(true)
    if (!fileList) return
    const file = fileList[0]

    if (!file) {
        alert("Please choose a file first!")
        loading(false)
    }

    const storageRef = ref(storage, `/files/${file.name}`)
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        // (snapshot) => {
            // const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            // update progress
            // console.log(percent);
        // },
        (err) => {
            console.log(err)
            loading(false)
        },
        () => {
            // download url
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                // console.log(url);
                imageSend(url)
            });

        }
    );
}