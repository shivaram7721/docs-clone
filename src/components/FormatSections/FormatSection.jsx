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
import styles from './FormatSection.module.css'

export function FormatSection() {


    return (
        <div className={styles.formatContainer}>
            <UndoIcon sx={{width:"1vw"}} className={styles.formatIcons}/>
            <RedoIcon className={styles.formatIcons}/>
            <PrintOutlinedIcon className={styles.formatIcons}/>
            <SpellcheckOutlinedIcon className={styles.formatIcons}/> 
            <FormatColorFillOutlinedIcon className={styles.formatIcons}/>
            <SelectZoom className={styles.formatIcons}/>
            <RxDividerVertical className={styles.formatIcons}/>
            <FontSize className={styles.formatIcons}/>
            <RxDividerVertical className={styles.formatIcons}/>
            <FontFamily className={styles.formatIcons}/>
            <RxDividerVertical className={styles.formatIcons}/>
            <RemoveOutlinedIcon className={styles.formatIcons}/>
            <input style={{width:"2vw"}} type='text' />
            <AddOutlinedIcon className={styles.formatIcons}/>
            <RxDividerVertical className={styles.formatIcons}/>
            <FormatBoldOutlinedIcon className={styles.formatIcons}/>
            <FormatItalicOutlinedIcon className={styles.formatIcons}/>
            <FormatUnderlinedOutlinedIcon className={styles.formatIcons}/>
            <FormatColorTextOutlinedIcon className={styles.formatIcons}/>
            <EditOutlinedIcon className={styles.formatIcons}/>
            <RxDividerVertical className={styles.formatIcons}/>
            <InsertLinkOutlinedIcon className={styles.formatIcons}/>
            <AddCommentOutlinedIcon className={styles.formatIcons}/>
            <InsertPhotoOutlinedIcon className={styles.formatIcons}/>
            <RxDividerVertical className={styles.formatIcons}/>
            <FormatAlignLeftOutlinedIcon className={styles.formatIcons}/>
            <ArrowDropDownOutlinedIcon className={styles.formatIcons}/>
            <FormatLineSpacingOutlinedIcon className={styles.formatIcons}/>
            <ChecklistOutlinedIcon className={styles.formatIcons}/>
            <ArrowDropDownOutlinedIcon className={styles.formatIcons}/>
            <FormatListBulletedOutlinedIcon className={styles.formatIcons}/>
            <ArrowDropDownOutlinedIcon className={styles.formatIcons}/>
            <FormatListNumberedOutlinedIcon className={styles.formatIcons}/>
            <ArrowDropDownOutlinedIcon className={styles.formatIcons}/>
            <FormatIndentDecreaseOutlinedIcon className={styles.formatIcons}/>
            <FormatIndentIncreaseOutlinedIcon className={styles.formatIcons}/>
            <FormatClearOutlinedIcon className={styles.formatIcons}/>
        </div>
    );
}