import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import {assets} from '../assets/assets'
import { toast } from 'react-toastify';
import axios from 'axios'

const MyProfile = () => {
  const {userData, setUserData, token, backendUrl, loadUserProfileData} = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('address', JSON.stringify(userData.address))
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      image && formData.append('image', image)

      const {data} = await axios.post(backendUrl + '/api/user/update-profile', formData, {headers:{token}})
      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }

  return userData && (
    <div className='flex flex-col gap-5'>
      <div className='flex justify-between items-center p-10 border border-gray-200 rounded-xl shadow-lg'>
        <div className='flex items-center gap-10'>
          {
            isEdit
            ? <label htmlFor='image'>
              <div className='inline-block relative cursor-pointer'>
                <img className='w-36 rounded opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
                <img className='w-10 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
              </div>
              <input onChange={(e)=>setImage(e.target.files[0])} type="file" id='image' hidden/>
            </label>
            : <img className='w-40 h-40 rounded-full' src={userData.image} alt="" />
          }
          
          {
            isEdit
              ? <input className='bg-gray-100' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
              : <p className='text-3xl'>{userData.name}</p>
          }
        </div>
        <div>
          {
            isEdit
              ? <button className='border border-primary px-8 py-2 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-all' onClick={updateUserProfileData}>Save information</button>
              : <button className='border border-primary px-8 py-2 rounded-full cursor-pointer hover:bg-primary hover:text-white transition-all' onClick={() => setIsEdit(true)}>Edit</button>
          }
        </div>
      </div>


      <div className='flex flex-col gap-5 p-10 border border-gray-200 rounded-xl shadow-lg'>
        <p className='text-xl'>DETAILS</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div>
            <p className='text-gray-400 mb-1 font-semibold'>Email</p>
            <p>{userData.email}</p>
          </div>

          <div>
            <p className='text-gray-400 mb-1 font-semibold'>Phone</p>
            {
              isEdit
                ? <input className='bg-gray-100' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
                : <p>{userData.phone}</p>
            }
          </div>

          <div>
            <p className='text-gray-400 mb-1 font-semibold'>Address</p>
            {
              isEdit
                ? <>
                  <input className='mb-1 bg-gray-100' onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
                  <input className='bg-gray-100' onChange={e => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
                </>
                : <>
                  <p>{userData.address.line1}</p>
                  <p>{userData.address.line2}</p>
                </>
            }
          </div>

          <div>
            <p className='text-gray-400 mb-1 font-semibold'>Gender:</p>
            {
              isEdit
                ? <select className='bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                : <p>{userData.gender}</p>
            }
          </div>

          <div>
            <p className='text-gray-400 mb-1 font-semibold'>Birthday:</p>
            {
              isEdit
                ? <input className='bg-gray-100' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
                : <p>{userData.dob}</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyProfile
