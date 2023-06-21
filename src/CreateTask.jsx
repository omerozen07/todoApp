import React, { useState } from 'react'

export default function (props) {
    const [task, setTask] = useState({
        title: '',
        content: ''
    })

    function detectChange(event) {///////////////////////////////////////////////////////////////////////////
        const { name, value } = event.target;

        setTask((prevTask) => {  //// bir önceki yazdığımızı tutar ve yanına ekleme yapmamızı sağlar örneğin b sonra a ba yzmamızı sağlar
            return {
                ...prevTask, /// önceki
                [name]: value
            }
        })
    }

    function submitTask(event) {//////////////////////////////////////////////////////////////////////////////////////
        props.onAdd(task);
        setTask({        // eklendikten sonra boşaltmak için
            title:'',
            content: ''
        })
        event.preventDefault(); // yenilenmesini istemediğimizden kullanılır

    }

    return (
        <div className='todoDivArea'>
            <form className='todoDiv'>

                <input type='text'
                    name='title'
                    value={task.title}
                    onChange={detectChange}
                    className='form-control todoText mb-3'
                    placeholder='Başlık'
                />

                <textarea name="content"
                    value={task.content}
                    onChange={detectChange}
                    className='form-control todoText mb-3'
                    rows="3"
                    placeholder='İşinizi Yazınız'
                ></textarea>

                <button className='btn btn-primary todoButton' onClick={submitTask} >Ekle</button>
            </form>
        </div>
    )
}
