import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

const useForm = () => {
    const formRef = useRef()
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
      });

      const disabledButton = !form.name || !form.email || !form.message
      
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
    
        emailjs.send(
          'service_ij8toc8',
          'template_seua6my', {
           from_name: form.name,
           to_name: 'Roman',
           from_email: form.email,
           to_email: 'rfedorov.work@gmail.com',
           message: form.message,
         },
         'mSvbWoHIggj1_7vr1'
         )
        .then(() => {
          setLoading(false)
          alert('Спасибо! Я отвечу вам, как только смогу!')
    
          setForm({
            name: '',
            email: '',
            message: '',
          })
        }, (error) => {
          setLoading(false)
          console.log(error)
          alert('Что-то пошло не так... Попробуйте еще раз.')
        })
      };

  return {
    formRef,
    form,
    loading,
    handleChange,
    handleSubmit,
    disabledButton
  }
}

export default useForm
