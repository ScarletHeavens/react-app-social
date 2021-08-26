import React from 'react'; 
import c from './UserPage.module.css';

const UserPage = (props) => {
  if (props.users.length === 0) {
      props.setUsers(
        [{id: 1,name: 'Herman Hesse', location:{city:'Berlin', country: "Germany"},follow: true,status: 'I live out the secret of my seed to the very end, and I care for nothing else', img: 'https://migueldimase.com/wp-content/uploads/Hermann-Hesse.jpg' },
        {id: 2,name: 'Erich Remarque', location:{city: 'Dresden', country: 'Germany'},follow: false,status: 'Toniht I drsnk too mych aperol' , img: 'https://www.alohacriticon.com/wp-content/uploads/2004/08/erich-maria-remarque-fotos.jpg'},
        {id: 3,name: 'Stephen Fry', location:{city:'London', country: "UK"},follow: true,status: 'You twat', img:'https://www.looktothestars.org/photo/6286-stephen-fry/story_half_width.jpg' },
        {id: 4,name: 'Chuck Palahniuk',location:{city:'Oregon', country: "USA"},follow: true ,status:'All God does is watch us and kill us when we get boring.' , img:'https://img.huffingtonpost.com/asset/60917525210000c5497f0bb3.jpg?cache=V91nrO5CuD&ops=scalefit_720_noupscale' },
        {id: 5,name: 'Kobo Abe', location:{city:'Osaka', country: "Japan"},follow: false, status:'おはようございます。' , img:'https://www.buscabiografias.com/img/people/Abe_Kobo.jpg' }
      ])
  }

    return <div className = {c.main} > {
 props.users.map(u =><div key ={u.id}>
     <span>
         <div><img src = {u.img} ></img></div>
         <div> {u.follow ? <button onClick = { ()=> {props.unfollow(u.id)}}>Unfollow</button>
        :<button onClick = {()=> {props.follow(u.id)}}>Follow</button>}
         </div>
     </span>

     <span>
        <span>
            <div>{u.name}</div>
            <div>{u.status}</div>
        </span>
        <span>
            <div>{u.location.city}</div>
            <div>{u.location.country}</div>
        </span>                 
     </span>

      </div>)
}

</div>
}

export default UserPage;