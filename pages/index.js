import Head from 'next/head';
import Link from "next/link";
import Layout from './components/layout';
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  return (
    <Layout>
      <Head>

        <title>Impressão Mania</title>
        {/*
        <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js"></script>
        <script src="https://www.gstatic.com/firebasejs/7.17.1/firebase-analytics.js"></script>
         
         */}

        {/*
          var firebaseConfig = {
            apiKey: "AIzaSyCxIlQFc1KYRTYsBKWagLqgG_VZ4fKZtEs",
            authDomain: "papura-f63cf.firebaseapp.com",
            databaseURL: "https://papura-f63cf.firebaseio.com",
            projectId: "papura-f63cf",
            storageBucket: "papura-f63cf.appspot.com",
            messagingSenderId: "202192389452",
            appId: "1:202192389452:web:4950dedb2ad7d370417be9",
            measurementId: "G-KC5GT7N4RK"
          };
          firebase.initializeApp(firebaseConfig);
          firebase.analytics();
        */}


      </Head>
      <section className="contact">
        <h1>Contato:</h1>
        <a href="impressaomania1000@gmail.com">impressaomania1000@gmail.com</a>


      </section>
    </Layout>
  );
}

export default Home;