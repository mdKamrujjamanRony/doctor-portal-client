import React from 'react';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{background: `url(${appointment})`}} className='flex justify-center items-center my-40 p-6 lg:p-0'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h4 className='text-xl text-primary font-bold'>Appointment</h4>
                <h2 className='text-4xl text-white py-6'>Make an appointment Today</h2>
                <p className='text-white mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum soluta atque ab maiores, itaque neque, excepturi obcaecati adipisci praesentium mollitia nulla. Explicabo, iusto! Aliquid deserunt sunt eos quidem natus pariatur tempore saepe nemo eius labore nesciunt voluptate accusamus, officia iure repellat fugiat consequuntur ex delectus enim corporis obcaecati fugit earum.</p>
                <PrimaryButton>book now</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;