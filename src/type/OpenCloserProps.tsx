// For an item that opens or closes another item.

export type OpenCloserProps = {
    open: boolean;
    setOpen: (isOpen: boolean) => void;
}