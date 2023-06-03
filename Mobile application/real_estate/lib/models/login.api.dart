// this code page job is to get the token from the api and save the token as a global variable


import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:real_estate/route/route.dart' as route;
import 'package:flutter_secure_storage/flutter_secure_storage.dart';

class LoginApi {
  static Future<bool> login(String email, String password) async {
    var url = Uri.parse('http://127.0.0.1:3000/login');
    var response = await http.post(url, body: jsonEncode({'email': email, 'password': password}));
    // print ('login api');
    // print (response.body);
    if (response.statusCode == 200) {
      var body = jsonDecode(response.body);
      print (body['token']);
      final storage = FlutterSecureStorage();
      await storage.write(key: 'token', value: body['token']);
      
      
      // route.token = body['token'];
      
      return true;
    }
    return false;
  }
}

