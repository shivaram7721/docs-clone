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

export function Actions() {

    const actions = [
        {
            icon:<UndoIcon />,
            tag: ''
        },
        {
            icon: <RedoIcon />,
            tag: ''
        },
        {
            icon: <RedoIcon />,
            tag: ''
        },
        {
            icon: <SpellcheckOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatColorFillOutlinedIcon />,
            tag: ''
        },
        {
            icon:<SelectZoom />,
            tag: ''
        },
        {
            icon: <RxDividerVertical />,
            tag: ''
        },
        {
            icon: <FontSize />,
            tag: ''
        },
        {
            icon: <RxDividerVertical />,
            tag: ''
        },
        {
            icon: <FontFamily />,
            tag: ''
        },
        {
            icon:<RxDividerVertical />,
            tag: ''
        },
        {
            icon: <RemoveOutlinedIcon />,
            tag: ''
        },
        {
            icon: <input style={{width:"2vw"}} type='text' />,
            tag: ''
        },
        {
            icon: <AddOutlinedIcon />,
            tag: ''
        },
        {
            icon: <RxDividerVertical />,
            tag: ''
        },
        {
            icon:<FormatBoldOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatItalicOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatUnderlinedOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatColorTextOutlinedIcon />,
            tag: ''
        },
        {
            icon: <EditOutlinedIcon />,
            tag: ''
        },
        {
            icon:<RxDividerVertical />,
            tag: ''
        },
        {
            icon: <InsertLinkOutlinedIcon />,
            tag: ''
        },
        {
            icon: <AddCommentOutlinedIcon />,
            tag: ''
        },
        {
            icon: <InsertPhotoOutlinedIcon />,
            tag: ''
        },
        {
            icon: <RxDividerVertical />,
            tag: ''
        },
        {
            icon:<FormatAlignLeftOutlinedIcon />,
            tag: ''
        },
        {
            icon: <ArrowDropDownOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatLineSpacingOutlinedIcon />,
            tag: ''
        },
        {
            icon: <ChecklistOutlinedIcon />,
            tag: ''
        },
        {
            icon: <ArrowDropDownOutlinedIcon />,
            tag: ''
        },
        {
            icon:<FormatListBulletedOutlinedIcon />,
            tag: ''
        },
        {
            icon: <ArrowDropDownOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatListNumberedOutlinedIcon />,
            tag: ''
        },
        {
            icon: <ArrowDropDownOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatIndentDecreaseOutlinedIcon />,
            tag: ''
        },
        {
            icon:<FormatIndentIncreaseOutlinedIcon />,
            tag: ''
        },
        {
            icon: <FormatClearOutlinedIcon />,
            tag: ''
        },
    ]



    return (
        <div className={styles.formatContainer}>
            {
                actions.map( (action, index)=> (
                    <p className={styles.formatIcons} key={index}>{action.icon}</p>
                ))
            }
        </div>
    );
}