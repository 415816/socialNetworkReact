import av from './Avatar.module.css';
import Preloader from "../../Preloader/Preloader";
import ava from './../../../img/defaultAvatar.gif'


const Avatar = (props) => {
    if (props.profile == null) {return <Preloader/>}
    const changeAva = (e) => {
        props.setProfilePhotoThunk(e.target.files[0]);
    }

    return (<div>
        <img className={av.avatar} src={props.profile.photos.large || ava}></img>
        {!props.isOwner && <input type="file" onChange={changeAva}/>}
    </div>)
}
export default Avatar;