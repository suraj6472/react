// import { Fragment, useState, useEffect } from 'react';
import React, { Fragment, Component } from 'react';

import Users from './Users';
import classes from './UserFinder.module.css';
// for using context in class based component
// we 2 approach
// 1 . consumer approach which also works in Functional components
// 2. contextType
import UsersContext from '../store/users-context';

class UserFinder extends Component {
  static contextType = UsersContext; // with this we can use only 1 context a class component unlike in functional component we are also to use as many component as we require.

  // for using more than one context, we will have to do manual modifications

  constructor() {
    super()
    this.state = {
      filteredUsers: [],
      searchTerm: ''

    }
  }

  componentDidMount() {
    this.setState({
      filteredUsers: this.context.users // now context can be used with this.context
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((user) => user.name.includes(this.state.searchTerm))
      })
    }
  }

  searchChangeHandler(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return <Fragment>
      <div className={classes.finder}>
        <input type='search' onChange={this.searchChangeHandler.bind(this)} />
      </div>
      <Users users={this.state.filteredUsers} />

      {/* consumer implementation syntex */}

      {/* <UsersContext.Consumer>
        {
          // (ctx) => { // this ctx is context value
          //   jsx
          // }
        }
      </UsersContext.Consumer> */}
    </Fragment>


  }
}

// const UserFinder = () => {
//   // const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   // const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type='search' onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

export default UserFinder;