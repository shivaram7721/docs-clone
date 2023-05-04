import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PrintOutlinedIcon from '@mui/icons-material/PrintOutlined';
import SpellcheckOutlinedIcon from '@mui/icons-material/SpellcheckOutlined';
import FormatColorFillOutlinedIcon from '@mui/icons-material/FormatColorFillOutlined';
import { SelectZoom } from './selectZoom';
import { FontFamily } from './fontFamily';
import { FontSize } from './fontSize';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';
import FormatUnderlinedOutlinedIcon from '@mui/icons-material/FormatUnderlinedOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import FormatLineSpacingOutlinedIcon from '@mui/icons-material/FormatLineSpacingOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import FormatIndentDecreaseOutlinedIcon from '@mui/icons-material/FormatIndentDecreaseOutlined';
import FormatIndentIncreaseOutlinedIcon from '@mui/icons-material/FormatIndentIncreaseOutlined';
import FormatClearOutlinedIcon from '@mui/icons-material/FormatClearOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import {RxDividerVertical} from 'react-icons/rx'
import styles from './FormatIcons.module.css'

export function FormatIcons(props) {

    console.log(props.onClick)

    const actions = [
        {
            icon:<UndoIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <RedoIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
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
            icon:<SelectZoom style={{width:"5vw"}}/>,
            tag: 'p'
        },
        {
            icon: <RxDividerVertical />,
            tag: 'p'
        },
        {
            icon: <FontSize />,
            tag: 'p'
        },
        {
            icon: <RxDividerVertical />,
            tag: 'p'
        },
        {
            icon: <FontFamily />,
            tag: 'p'
        },
        {
            icon:<RxDividerVertical />,
            tag: 'p'
        },
        {
            icon: <RemoveOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <input style={{width:"2vw"}} type='text' />,
            tag: 'p'
        },
        {
            icon: <AddOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <RxDividerVertical />,
            tag: 'p'
        },
        {
            icon:<FormatBoldOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'strong'
        },
        {
            icon: <FormatItalicOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'i'
        },
        {
            icon: <FormatUnderlinedOutlinedIcon sx={{width:"1.4vw"}}/>,
            tag: 'u'
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
        {
            icon:<FormatAlignLeftOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <ArrowDropDownOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <FormatLineSpacingOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <ChecklistOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <ArrowDropDownOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon:<FormatListBulletedOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <ArrowDropDownOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <FormatListNumberedOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <ArrowDropDownOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <FormatIndentDecreaseOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon:<FormatIndentIncreaseOutlinedIcon sx={{width:"1.2vw"}}/>,
            tag: 'p'
        },
        {
            icon: <FormatClearOutlinedIcon sx={{width:"1.2vw"}}/>,
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
        </div>
    );
}