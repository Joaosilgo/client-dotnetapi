/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ]
  }
  ```
*/
import React, { Component } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import logo from './imgs/React-icon.svg';
import axios from 'axios';


export default class  SignIn extends Component {


    handleSubmit =  e  => {

        e.preventDefault();

        const data = {
          
            
            username: "batman",
            password: "batman",
            
            
            
        }
    /*    const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body:data,
            mode: 'no-cors'
        };
        */
/*
        axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

        axios.post("https://dotnet-webapi.herokuapp.com/v1/account/login", data)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
            */
/*
          const res =  fetch('https://dotnet-webapi.herokuapp.com/v1/account/login', requestOptions)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
            */
            const requestOptions = {
                method: 'POST',
                headers: {"Content-Type": "application/json; charset=utf8"},
                
                body:data,
                Credential: 'include',

                mode: 'no-cors'
              
            };

             fetch("https://dotnet-webapi.herokuapp.com/v1/account/login",requestOptions)
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
        };

render(){
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={logo}
                            alt="Workflow"
                        />
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={this.handleSubmit}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="username"
                                    autoComplete="email"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address"
                                    onChange={e => this.username = e.target.value}
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"
                                    onChange={e => this.password = e.target.value}
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember_me"
                                    name="remember_me"
                                    type="checkbox"
                                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                />
                                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a href="/" className="font-medium text-gray-600 hover:text-gray-500">
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-gray-500 group-hover:text-gray-400" aria-hidden="true" />
                                </span>
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}