'use server'

import { redirect } from "next/navigation"


export async function submitForm() {
    console.log('Submitting')
    redirect('/test')
}