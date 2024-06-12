import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';



export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        dni: '',
        tipo_evento: '',
        tiempo: '',
        ip_publica: '',
        coordenadas: '',
    });
    
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-right c_2">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="c_6 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500 "
                            >
                                Acceso
                            </Link>

                            <Link
                                href={route('register')}
                                className="c_6 ml-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Registro
                            </Link>
                        </>
                    )}
                
                </div> 
                <html
  key="1"
  lang="{{ str_replace('_', '-', app()->getLocale()) }}"
>
  <head>
    <meta charSet="utf-8" />
    <meta
      content="width=device-width, initial-scale=1"
      name="viewport"
    />
    <title>
      Registro de marcacion
    </title>
    <meta
      content="width=device-width, initial-scale=1.0"
      name="viewport"
    />
    <meta charSet="UTF-8" />
    <link
      href="assets/css/bootstrap.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="assets/css/main.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="assets/css/main_base_pro.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="assets/fonts/font-awesome/css/font-awesome.min.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="assets/fonts/flaticon/font/flaticon.css"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="assets/img/favicon.ico"
      rel="shortcut icon"
      type="image/x-icon"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800;900&display=swap"
      rel="stylesheet"
    />
    <link
      href="assets/css/style.css"
      rel="stylesheet"
      type="text/css"
    />
  </head>
  <body
    className="antialiased"
    id="top"
  >
   
    <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
   
      <div className="page_loader" />
      <div className="login-2 login-background c_3">
        <div className="login-background-inner">
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
          <div className="cube" />
        </div>
        <div className="login-2-inner">
          <div className="container">
            <div className="row login-box">
              <div className="col-lg-6 align-self-center pad-0 form-info">
                <div className="form-section align-self-center">
                  <div className="logo-2 logo c_4">
                    <a href="registro.blade.php">
                      <img
                        alt="logo"
                        src="assets/img/logos/logo-palomino.png"
                      />
                    </a>
                  </div>
                  <h3 >
                    Registrar mi marcación
                  </h3>
                  <div className="clearfix" />
                  
    
                   <form>
                    <div className="form-group">
                      <input
                        aria-label="DNI"
                        className="form-control"
                        name="dni"
                        placeholder="DNI"
                        type="text"
                      />
                    </div>
                    <div className="link-btn active btn-1 active-bg">
                    <PrimaryButton className="ml-4" disabled={processing}>
                       INGRESO
                    </PrimaryButton>
                    <PrimaryButton className="ml-4" disabled={processing}>
                       SALIDA
                    </PrimaryButton>
                    </div>
                  </form>


                </div>
              </div>
              <div className="col-lg-6 align-self-center pad-0 bg-img">
                <div className="info clearfix">
                  <div className="box">
                    <span />
                    <span />
                    <span />
                    <span />
                    <div className="content">
                      <div className="logo-2">
                        <a href="login-2.html">
                          <img
                            alt="logo"
                            className="c_1 c_4"
                            src="assets/img/logos/logo-palomino.png"
                          />
                        </a>
                      </div>
                      <h3>
                        BIENVENIDO
                      </h3>
                      <div className="social-list">
                        <div id="orologio">
                          <p className="data">
                           
                          </p>
                         
                          <p />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="assets/js/reloj.js" />
      <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js" />
      <script src="assets/js/jquery-3.6.0.min.js" />
      <script src="assets/js/bootstrap.bundle.min.js" />
      <script src="assets/js/jquery.validate.min.js" />
      <script src="assets/js/app.js" />
    </div>
  </body>
</html>
               
            </div>
        </>
    );
}

