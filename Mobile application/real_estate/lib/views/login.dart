import 'package:flutter/material.dart';
import 'package:real_estate/route/route.dart'as route  ;
import 'package:real_estate/models/login.api.dart';

// class LoginPage extends StatefulWidget {
//   const LoginPage({Key? key}) : super(key: key);
//   static const String routeName = '/login';

//   @override
//   State<StatefulWidget> createState() {
//     // TODO: implement createState
//     throw UnimplementedError();
//   }

//   // @override
//   // _LoginPageState createState() => _LoginPageState();
// }



class LoginPage extends StatelessWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login Page'),
      ),
      body: Center(
        child: ElevatedButton(
          child: Text(
            'Login',
            style: TextStyle(color: Colors.white),
          ),
          onPressed: () {
            LoginApi.login('email', 'password');
            Navigator.pushNamed(context, route.homePage);}
          
          // color: Colors.blue,
        ),
      ),
    );
  }
}