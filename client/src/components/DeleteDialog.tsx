import { Dialog } from '@mui/material';

type DeleteDialogProps = {
  handleClose: () => void,
  name: string,
  open: boolean
}

const DeleteDialog = ({handleClose, name, open}: DeleteDialogProps) => {
  return (
    <Dialog onClose={handleClose} open={open}></Dialog>
  )
}

export default DeleteDialog;