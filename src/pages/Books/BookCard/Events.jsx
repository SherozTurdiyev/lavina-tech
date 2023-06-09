import  { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { BsThreeDots } from 'react-icons/bs';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Modal, notification } from 'antd';
import { useMutationApi } from '../../../hooks/useMutationApi';


const Events = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const status = useRef("0");
    const open = Boolean(anchorEl);

    const deleteMutation = useMutationApi("DELETE", `/books/${props?.id}`);
    const editMutation = useMutationApi("PATCH", `/books/${props?.id}`, `{"status":"0"}`);
    if (deleteMutation.isSuccess) {
        notification.success({ message: "Mufavvaqiyatli o'chirildi!" });
        window.location.reload();
    }
    if (editMutation.isSuccess) {
        notification.success({ message: "Mufavvaqiyatli Tahrirlandi!" });
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const deleteBook = () => {
        setAnchorEl(null);
        Modal.confirm(
            {
                title: 'This is a notification message',
                content: (
                    <div>
                        <p><span className='text-base font-bold'>{props.bookName}</span> kitobni rostan o`chirmoqchimisiz?</p>
                    </div>
                ),
                onOk() {
                    deleteMutation.mutate();
                },
                okText: "O'chirish",
                cancelText: "Bekor qilish",
                okButtonProps: {
                    style: {
                        background: "blue"
                    }
                }
            });
    };
    const editBook = () => {
        setAnchorEl(null);
        Modal.confirm(
            {
                title: 'This is a notification message',
                content: (
                    <div>
                        <p><span className='text-base font-bold'>{props.bookName}</span> kitobni Tahrirlamoqchimisiz?</p>
                        <select
                            className='border mt-3 py-1 px-3 outline-none rounded-lg'
                            ref={status}
                        >
                            <option value="0">New</option>
                            <option value="1">Reading</option>
                            <option value="2">Finished</option>
                        </select>
                    </div>
                ),
                onOk() {
                    editMutation.mutate({ "status": status.current.value });
                    console.log(status.current.value);
                },
                okText: "Tahrirlash",
                cancelText: "Bekor qilish",
                okButtonProps: {
                    style: {
                        background: "Yellow",
                        color: 'black'
                    }
                }
            });
    };

    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <BsThreeDots className='text-xl text-black' />
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                // onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={editBook}><AiFillEdit className='mr-2 text-yellow-400' /> Tahrirlash</MenuItem>
                <MenuItem onClick={deleteBook}><AiFillDelete className='mr-2 text-red-400' /> O`chirish</MenuItem>
            </Menu>
        </div>
    );
};

export default Events;
