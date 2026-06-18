import type ListItemProps from "../type/appTypes/ListItemProps";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";


export default function TaskListItem(props: ListItemProps) {
    return <>
        <ListItem className=" bg-gray-50 rounded-2xl mt-2">
            <ListItemAvatar sx={{color: props.avatarMainColor, background: props.avatarBackgroundColor}} className="rounded-full text-center pl-0 pr-0 pt-3 pb-3 mr-4">
                {props.avatar}
            </ListItemAvatar>
            <ListItemText primary={props.textPrimary} secondary={props.textSecondary} />
        </ListItem>
    </>
}