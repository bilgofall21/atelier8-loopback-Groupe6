// Uncomment these imports to begin using these cool features!

import { get, post } from "@loopback/rest"


export class UserController {
  constructor() { }

  @get('/user')
  hello(): string {
    return 'Hello world!';
  }
  
  @post('/users')
  test(): string {
    return 'salut';
  }
  
}
