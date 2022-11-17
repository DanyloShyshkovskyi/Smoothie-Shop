import React, {ChangeEvent, forwardRef, useState} from 'react';
import {BottleLoaderSvg} from "@components/loaders";
import {imageUpload} from "@services/upload/image.upload";
import {peep} from "@assets/icons";
import {UserImageStyle} from './userPictureStyle';

interface IUserPicture {
    onChange: (url: string) => void,
    url: string | undefined,
}

export const UserPicture = forwardRef<HTMLLabelElement, IUserPicture>((
    {onChange, url}, ref
) => {
    const [imageLoading, setImageLoading] = useState<boolean>(true)

    const uploadImageFunc = (e: ChangeEvent<HTMLInputElement>) =>
        imageUpload(e, setImageLoading, (url => onChange(url)))

    return (
        <UserImageStyle ref={ref} backgroundImage={url || peep} htmlFor="file-upload">
            <input id="file-upload" accept="image/*" onChange={uploadImageFunc} type="file"/>
            {imageLoading && <BottleLoaderSvg fullAbsolute/>}
            <img onLoad={() => setImageLoading(false)} src={url || peep} alt={'user'}/>
        </UserImageStyle>
    );
});
