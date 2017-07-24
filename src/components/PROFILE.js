ProfileGoogle = {
  provider: 'google-oauth2',
  displayName: 'Mitch Foster',
  id: 'google-oauth2|111524463493278764878',
  name: { familyName: 'Foster', givenName: 'Mitch' },
  emails: [ { value: 'mitchfoster3@gmail.com' } ],
  picture: 'https://lh3.googleusercontent.com/-3dT5ppz0dEI/AAAAAAAAAAI/AAAAAAAAKi0/KLruMZhg_2c/photo.jpg',  locale: 'en',  nickname: 'mitchfoster3',  gender: 'male',  identities:   [ { provider: 'google-oauth2',
       user_id: '111524463493278764878',
       connection: 'google-oauth2',
       isSocial: true } ],
  _json:
   { email: 'mitchfoster3@gmail.com',
     email_verified: true,
     name: 'Mitch Foster',
     given_name: 'Mitch',
     family_name: 'Foster',
     picture: 'https://lh3.googleusercontent.com/-3dT5ppz0dEI/AAAAAAAAAAI/AAAAAAAAKi0/KLruMZhg_2c/photo.jpg',
     gender: 'male',
     locale: 'en',
     clientID: 'WwCqJpCVVnOnbQksfXDXAy8KfF5b54m1',
     updated_at: '2017-07-21T16:29:53.076Z',
     user_id: 'google-oauth2|111524463493278764878',
     nickname: 'mitchfoster3',
     identities: [ [Object] ],
     created_at: '2017-07-20T22:23:39.197Z',
     sub: 'google-oauth2|111524463493278764878' },
  _raw: '{"email":"mitchfoster3@gmail.com","email_verified":true,"name":"Mitch Foster","given_name":"Mitch","family_name":"Foster","picture":"https://lh3.googleusercontent.com/-3dT5ppz0dEI/AAAAAAAAAAI/AAAAAAAAKi0/KLruMZhg_2c/photo.jpg","gender":"male","locale":"en","clientID":"WwCqJpCVVnOnbQksfXDXAy8KfF5b54m1","updated_at":"2017-07-21T16:29:53.076Z","user_id":"google-oauth2|111524463493278764878","nickname":"mitchfoster3","identities":[{"provider":"google-oauth2","user_id":"111524463493278764878","connection":"google-oauth2","isSocial":true}],"created_at":"2017-07-20T22:23:39.197Z","sub":"google-oauth2|111524463493278764878"}' }

  ProfileAuth0 = {
  provider: 'auth0',
  displayName: 'mitchfoster3@gmail.com',
  id: 'auth0|595f01c6cc49715253d5c8e6',
  name: { familyName: undefined, givenName: undefined },
  emails: [ { value: 'mitchfoster3@gmail.com' } ],
  picture: 'https://s.gravatar.com/avatar/4acd22b1195598ecf7e2db971e2a4e65?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png',
  nickname: 'mitchfoster3',
  identities:
   [ { user_id: '595f01c6cc49715253d5c8e6',
       provider: 'auth0',
       connection: 'Username-Password-Authentication',
       isSocial: false } ],
  _json:
   { email: 'mitchfoster3@gmail.com',
     email_verified: false,
     user_id: 'auth0|595f01c6cc49715253d5c8e6',
     clientID: 'WwCqJpCVVnOnbQksfXDXAy8KfF5b54m1',
     picture: 'https://s.gravatar.com/avatar/4acd22b1195598ecf7e2db971e2a4e65?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png',
     nickname: 'mitchfoster3',
     identities: [ [Object] ],
     updated_at: '2017-07-21T16:32:28.501Z',
     created_at: '2017-07-07T03:36:38.869Z',
     name: 'mitchfoster3@gmail.com',
     user_metadata: { hobby: 'surfing' },
     app_metadata: {},
     sub: 'auth0|595f01c6cc49715253d5c8e6' },
  _raw: '{"email":"mitchfoster3@gmail.com","email_verified":false,"user_id":"auth0|595f01c6cc49715253d5c8e6","clientID":"WwCqJpCVVnOnbQksfXDXAy8KfF5b54m1","picture":"https://s.gravatar.com/avatar/4acd22b1195598ecf7e2db971e2a4e65?s=480&r=pg&d=https%3A%2F%2Fcdn.auth0.com%2Favatars%2Fmi.png","nickname":"mitchfoster3","identities":[{"user_id":"595f01c6cc49715253d5c8e6","provider":"auth0","connection":"Username-Password-Authentication","isSocial":false}],"updated_at":"2017-07-21T16:32:28.501Z","created_at":"2017-07-07T03:36:38.869Z","name":"mitchfoster3@gmail.com","user_metadata":{"hobby":"surfing"},"app_metadata":{},"sub":"auth0|595f01c6cc49715253d5c8e6"}' }



//    passport.use( new Auth0Strategy({
//                 domain: config.auth0.domain,
//                 clientID: config.auth0.clientID,
//                 clientSecret: config.auth0.clientSecret,
//                 callbackURL: config.auth0.callbackURL
//             },
//             (accessToken, refreshToken, extraParams, profile, done) => {
//                 console.log("PROFILE",profile._json.clientID);

//                 dbInstance.getUser(profile._json.clientID).then( (user) => {
//                     if (user[0]){
//                         console.log('USER FOUND', user);
//                         done(null, user)
//                     } else {
//                         console.log("NOT FOUND");
//                         dbInstance.createUser([profile.name.givenName, profile.name.familyName, profile._json.nickname, profile._json.email, profile._json.clientID])
//                         .then((user)=> {
//                             console.log('CREATED USER', user[0]);
//                             done(null, user[0])
//                         })
//                     }
                
//                 })

//             }
// ));

