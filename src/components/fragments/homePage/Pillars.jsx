import React from 'react';
import { FaPeopleRoof } from 'react-icons/fa6';
import { MdHealthAndSafety, MdCastForEducation } from 'react-icons/md';
import { SiArkecosystem } from 'react-icons/si';
import { GrMoney } from 'react-icons/gr';

export default function Pillars() {
  return (
    <section className="container p-5 mx-auto my-7">
      <div className="mb-10 lg:mb-20">
        <h1 className="text-center text-xl font-bold lg:text-2xl text-slate-500">
          5 PILAR PROGRAM BERSAMA PALESTINA
        </h1>
        <p className="text-center text-sm text-slate-500">
          Mari kita dukung program donasi yang dilaksanakan oleh Bersama
          Palestina
        </p>
      </div>
      <div className="grid grid-cols-2 gap-y-7 gap-x-3 lg:grid-cols-3">
        <div className="pillar-card">
          <div className="pillar-logo">
            <FaPeopleRoof className="text-primary" />
          </div>
          <p className="my-4 text-slate-700 text-center">Kemanusiaan</p>
          <p className="text-center text-slate-500 text-sm">
            Penanganan masalah sosial yang timbul akibat penyerangan oleh
            israel, seperti bantuan donasi dan lainnya
          </p>
        </div>
        <div className="pillar-card">
          <div className="pillar-logo">
            <MdHealthAndSafety className="text-primary" />
          </div>
          <p className="my-4 text-slate-700 text-center">Kesehatan</p>
          <p className="text-center text-slate-500 text-sm">
            Program donasi Bersama Palestina juga berfokus pada pemenuhan
            kesahatan masyarakat Palestina untuk mendapatkan kehidupan yang
            berkualitas.
          </p>
        </div>
        <div className="pillar-card">
          <div className="pillar-logo">
            <MdCastForEducation className="text-primary" />
          </div>
          <p className="my-4 text-slate-700 text-center">Pendidikan</p>
          <p className="text-center text-slate-500 text-sm">
            Program peningkatan mutu pendidikan masyarakat Palestina dengan
            melakukan donasi di berbagai sektor pendidikan untuk mendapatkan
            pendidikan yang baik
          </p>
        </div>
        <div className="pillar-card">
          <div className="pillar-logo">
            <SiArkecosystem className="text-primary" />
          </div>
          <p className="my-4 text-slate-700 text-center">Lingkungan</p>
          <p className="text-center text-slate-500 text-sm">
            Banyak tempat di negara Palestina yang hancur tidak tersisa akibat
            serangan zionis israel maka dari itu kami membuat program donasi
            untuk membantu masyarakat Palestina
          </p>
        </div>
        <div className="pillar-card">
          <div className="pillar-logo">
            <GrMoney className="text-primary" />
          </div>
          <p className="my-4 text-slate-700 text-center">Ekonomi</p>
          <p className="text-center text-slate-500 text-sm">
            Program peningkatan kesejahteraan masyarakat Palestina dengan
            menerima manfaat donasi-donasi lainnya.
          </p>
        </div>
      </div>
    </section>
  );
}
