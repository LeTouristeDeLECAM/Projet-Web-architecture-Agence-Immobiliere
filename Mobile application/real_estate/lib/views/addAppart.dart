// this page is used to add a new appartement to the database

import 'package:flutter/material.dart';
import 'package:real_estate/models/appartement.dart';
import 'package:real_estate/models/appartement.api.dart';

class AddAppartementPage extends StatefulWidget {
  @override
  _AddAppartementPageState createState() => _AddAppartementPageState();
}

class _AddAppartementPageState extends State<AddAppartementPage> {
  final _formKey = GlobalKey<FormState>();
  final _scaffoldKey = GlobalKey<ScaffoldState>();
  bool _isLoading = false;

  // Create a controller for each field
  final _titleController = TextEditingController();
  final _descriptionController = TextEditingController();
  final _priceController = TextEditingController();
  final _surfaceController = TextEditingController();
  final _roomsController = TextEditingController();
  final _addressController = TextEditingController();

  @override
  void dispose() {
    _titleController.dispose();
    _descriptionController.dispose();
    _priceController.dispose();
    _surfaceController.dispose();
    _roomsController.dispose();
    _addressController.dispose();
    super.dispose();
  }

  Future<void> _addAppartement() async {
    if (_formKey.currentState.validate()) {
      setState(() {
        _isLoading = true;
      });
      final Appartement appartement = Appartement(
        title: _titleController.text,
        description: _descriptionController.text,
        price: double.parse(_priceController.text),
        surface: double.parse(_surfaceController.text),
        nbRooms: int.parse(_roomsController.text),
        address: _addressController.text,
      );
      final bool result = await AppartementApi.addAppartement(appartement);
      setState(() {
        _isLoading = false;
      });
      final String message =
          result ? 'Your appartement has been added' : 'Error';
      _scaffoldKey.currentState.showSnackBar(
        SnackBar(
          content: Text(message),
          duration: Duration(seconds: 3),
        ),
      );
      Navigator.of(context).pop();
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      // appBar: AppBar(title: Text('Add an appartement')),
      body: SingleChildScrollView(
        child: Container(
          padding: EdgeInsets.all(16),
          child: Form(
            key: _formKey,
            child: Column(
              children: <Widget>[
                // Add a TextFormField for the title
                TextFormField(
                  controller: _titleController,
                  decoration: InputDecoration(
                    labelText: 'Title',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter a title';
                    }
                    return null;
                  },
                ),
                // Add a TextFormField for the
                TextFormField(
                  controller: _descriptionController,
                  decoration: InputDecoration(
                    labelText: 'Description',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter a description';
                    }
                    return null;
                  },
                ),
                // Add a TextFormField for the price
                TextFormField(
                  controller: _priceController,
                  decoration: InputDecoration(
                    labelText: 'Price',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter a price';
                    }
                    return null;
                  },
                ),
                // Add a TextFormField for the surface
                TextFormField(
                  controller: _surfaceController,
                  decoration: InputDecoration(
                    labelText: 'Surface',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter a surface';
                    }
                    return null;
                  },
                ),
                // Add a TextFormField for the number of rooms
                TextFormField(
                  controller: _roomsController,
                  decoration: InputDecoration(
                    labelText: 'Number of rooms',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter a number of rooms';
                    }
                    return null;
                  },
                ),
                // Add a TextFormField for the address
                TextFormField(
                  controller: _addressController,
                  decoration: InputDecoration(
                    labelText: 'Address',
                  ),
                  validator: (value) {
                    if (value!.isEmpty) {
                      return 'Please enter an address';
                    }
                    return null;
                  },
                ),
                SizedBox(height: 20),
                _isLoading
                    ? CircularProgressIndicator()
                    : ElevatedButton(
                        child: Text('Add'),
                        onPressed: _addAppartement,
                      ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
