// this code page job is to get the tockent from the api and save the token as a global variable


import 'dart:convert';
import 'package:http/http.dart' as http;
import 'package:real_estate/route/route.dart' as route;

class LoginApi {
  static Future<bool> login(String email, String password) async {
    var url = Uri.parse('http://localhost:3000/login');
    var response = await http.post(url, body: jsonEncode({'email': email, 'password': password}));
    if (response.statusCode == 200) {
      var body = jsonDecode(response.body);
      // route.token = body['token'];
      return true;
    }
    return false;
  }
}

