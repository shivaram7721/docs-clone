import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import { SelectZoom } from './selectZoom';
import { FontFamily } from './fontFamily';
import { FontSize } from './fontSize';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import {RxDividerVertical} from 'react-icons/rx'
import styles from './FormatIcons.module.css'
// import { TextAlign } from './textAlign';

export function FormatIcons(props) {


    const actions = [
        {
            icon:<UndoIcon sx={{width:"1.2vw"}}/>,
            tag: 'undo'
        },
        {
            icon: <RedoIcon sx={{width:"1.2vw"}}/>,
            tag: 'redo'
        },
        {
            icon: <PrintOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <SpellcheckOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <FormatColorFillOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <RxDividerVertical />,
            tag: 'p'
        },
        {
            icon:<FormatBoldOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'bold'
        },
        {
            icon: <FormatItalicOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'italic'
        },
        {
            icon: <FormatUnderlinedOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'underline'
        },
        {
            icon: <FormatColorTextOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'p'
        },
        {
            icon: <EditOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'p'
        },
        {
            icon:<RxDividerVertical />,
            tag: 'p'
        },
        {
            icon: <InsertLinkOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <AddCommentOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <InsertPhotoOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <RxDividerVertical sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
    ]



    return (
        <div className={styles.formatContainer}>
            {
                actions.map( (action, index)=> (
                    <p onClick={()=> props.onClick(action.tag)} className={styles.formatIcons} key={index}>{action.icon}</p>
                ))
            }
            <div className={styles.select}>
                <FontFamily />
                <FontSize />
                <SelectZoom />
            </div>
        </div>
    );
}