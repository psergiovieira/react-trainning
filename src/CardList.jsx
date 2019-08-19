import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function CardList() {
    return (
        <div className="row">
            <div className="col-sm-4">
                <Card title="Title one"
                 description="123"
                 featureImage="http://images.clipartpanda.com/feature-clipart-feature-md.png"/>
            </div>
            <div className="col-sm-4">
                <Card title="Title one"
                 description="987" 
                 featureImage="https://tr1.cbsistatic.com/hub/i/2016/10/17/b8fc1ae1-fb59-4d54-88a4-291db27c1ae6/explorehero.jpg"/>
            </div>
            <div className="col-sm-4">
                <Card title="Title one"
                 description="654" 
                 featureImage="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3dbfcffb-d12a-4000-bd89-58526757b287/d9skw59-1a7b14f0-3a88-4889-ab94-659bfd194987.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkYmZjZmZiLWQxMmEtNDAwMC1iZDg5LTU4NTI2NzU3YjI4N1wvZDlza3c1OS0xYTdiMTRmMC0zYTg4LTQ4ODktYWI5NC02NTliZmQxOTQ5ODcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.KakbBbSTHcC6gi2vf0QvaFj0iuAmrldKZMHSklqKBZk"/>
            </div>
        </div>
    );
}  