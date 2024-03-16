import { Appbar } from "../components/Appbar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import {useState} from 'react'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { SigninType } from "@shez100x/easytypes";
import Checkbox from "../components/Checkbox";
import Labelledinput from "../components/LabelledInput";

const Publish: React.FC = () => {
    const [signInputs, setSignInputs] = useState<SigninType>({
        email: '',
        password: '',
    });
    const [isChecked, setIsChecked] = useState(false);

    const handleChange = (newChecked: boolean) => {
        setIsChecked(newChecked);
    };

    const fetchData = async () => {
        try {
            const response = await axios.post(
                'https://backend.shaa1891640.workers.dev/api/v1/user/signin',
                signInputs
            );
            const jwt = response.data.jwt;
            localStorage.setItem('jwt', jwt);
        } catch (e) {
            console.log(e, 'Error while fetching');
        }
    };

    return (
        <div>
            <div>
                <div>
                    <Appbar/>
                </div>
                <div style={{ marginLeft: '2rem', marginTop: '1rem', maxWidth: '20rem', display: 'flex', flexDirection: 'column' }}>
                    <Labelledinput
                        placeholder="Enter email"
                        label="Email"
                        onChange={(e) => {
                            setSignInputs({ ...signInputs, email: e.target.value });
                        }}
                    />
                    <Labelledinput
                        type="password"
                        placeholder="Enter Password"
                        label="Password"
                        onChange={(e) => {
                            setSignInputs({ ...signInputs, password: e.target.value });
                        }}
                    />
                    <div style={{color:"lightgray", fontWeight:"lighter", paddingTop:"4px"}}>
                        click to Continue
                    </div>
                    <div style={{ marginTop: '1rem', cursor: 'pointer', width: '2rem', height: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                        
                        <Checkbox checked={isChecked} onChange={handleChange} onClick={fetchData} />
                    </div>
                </div>
                <TextEditor />
            </div>
        </div>
    );
};

export default Publish;

const TextEditor: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const navigate = useNavigate()

    const modules = {
        toolbar: [
            [{ header: [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            ['link', 'image'],
        ],
    };

    const formats = [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'list',
        'bullet',
        'link',
        'image',
    ];

    return (
        <>
            <div style={{ paddingTop: '2rem', display: 'flex', justifyContent: 'center' }}>
                <div style={{ maxWidth: '50rem', width: '100%', display: 'flex', flexDirection: 'column' }}>
                    <label style={{ display: 'flex', justifyContent: 'start', paddingLeft: '0.25rem', fontWeight: 'thin' }}>
                        <span>Enter Title</span>
                    </label>
                    <div
                        style={{
                            height: '10rem',
                            width: '100%',
                            padding: '0',
                            fontSize: '0.875rem',
                            color: '#1f2937',
                            backgroundColor: '#f3f4f6',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.375rem',
                        }}
                    >
                        <ReactQuill theme="bubble" value={title} onChange={setTitle} modules={modules} formats={formats} />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <ReactQuill
                            style={{
                                borderRadius: '0.375rem',
                                height: '25rem',
                                backgroundColor: '#f3f4f6',
                                border: '1px solid #e5e7eb',
                                color: '#1f2937',
                            }}
                            theme="snow"
                            value={content}
                            onChange={setContent}
                            modules={modules}
                            formats={formats}
                        />
                    </div>
                    <div style={{ marginTop: '1rem' }}>
                        <button
                            onClick={async () => {
                                try{
                                const response = await axios.post(
                                    'https://backend.shaa1891640.workers.dev/api/v1/blog',
                                    {
                                        data: {
                                            title,
                                            content,
                                        },
                                    },
                                    {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem('jwt')}`,
                                        },
                                    }
                                    );
                                    navigate(`blog/${response.data.id}`)
                                }catch(e){console.log(e)}
                            }}
                            type="submit"
                            style={{
                                marginTop: '1.5rem',
                                display: 'inline-flex',
                                alignItems: 'center',
                                padding: '0.655rem 1.25rem',
                                fontSize: '0.875rem',
                                fontWeight: 'bold',
                                textAlign: 'center',
                                color: '#ffffff',
                                backgroundColor: '#10b981',
                                borderRadius: '0.75rem',
                                transition: 'transform 200ms, background 200ms',
                                outline: 'none',
                                border: 'none',
                                cursor: 'pointer',
                            }}

                        >
                            Publish Post
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};
