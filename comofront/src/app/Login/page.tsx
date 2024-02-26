'use server'
import LoginComponent from '../component/login';
import { cookies } from 'next/headers'

export default async function Page(){
  return (
    <div>
      <LoginComponent login></LoginComponent>
    </div>
  );
}