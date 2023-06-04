// In this page we will create a form to edit an appartement
//
import 'package:flutter/material.dart';
import 'package:real_estate/models/appartement.dart';
import 'package:real_estate/models/appartement.api.dart';
import 'package:real_estate/route/route.dart'as route  ;

class EditAppartementPage extends StatefulWidget {
  final Appartement appartement;
  const EditAppartementPage({Key? key, required this.appartement}) : super(key: key);
  @override
  _EditAppartementPageState createState() => _EditAppartementPageState();
}

class _EditAppartementPageState extends State<EditAppartementPage> {
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
  void initState() {
    super.initState();
    if (widget.appartement != null) {
      _titleController.text = widget.appartement.title;
      _descriptionController.text = widget.appartement.description;
      _priceController.text = widget.appartement.price.toString();
      _surfaceController.text = widget.appartement.surface.toString();
      _roomsController.text = widget.appartement.nbRooms.toString();
      _addressController.text = widget.appartement.address;

    }
  }

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

  Future<void> _editAppartement() async {
    if (_formKey.currentState!.validate()) {
      setState(() {
        _isLoading = true;
      });
      final Appartement appartement = Appartement(
        appart_Id: widget.appartement.appart_Id,
        title: _titleController.text,
        description: _descriptionController.text,
        price: int.parse(_priceController.text),
        surface: int.parse(_surfaceController.text),
        nbRooms: int.parse(_roomsController.text),
        address: _addressController.text,
      );
      final bool isSuccess = await AppartementApi.updateAppartement(appartement );
      setState(() {
        _isLoading = false;
      });
      if (isSuccess) {
        Navigator.of(context).pop();
      } else {
        _scaffoldKey.currentState!.showSnackBar(
          SnackBar(
            content: Text('Something went wrong'),
          ),
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey, // Add the key to the Scaffold
      appBar: AppBar(
        title: Text('Edit Appartement'),
      ),

      bottomNavigationBar: BottomAppBar(
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: <Widget>[

            IconButton(
              onPressed: () {
                Navigator.pushNamed(context, route.loginRoute);
              },
              icon: Icon(Icons.login),
            ),
            IconButton(
              onPressed: () {
                Navigator.pushNamed(context, route.homePage);
              },
              icon: Icon(Icons.home),
            ),
            
          ]
        ),
        
      ),
      


      body: _isLoading
          ? Center(
              child: CircularProgressIndicator(),
            )
          : SingleChildScrollView(
              child: Container(
                padding: EdgeInsets.all(16),
                child: Form(
                  key: _formKey, // Add the key to the Form
                  child: Column(
                    children: <Widget>[
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
                      TextFormField(
                        controller: _roomsController,
                        decoration: InputDecoration(
                          labelText: 'Rooms',
                        ),
                        validator: (value) {
                          if (value!.isEmpty) {
                            return 'Please enter a number of rooms';
                          }
                          return null;
                        },
                      ),
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
                      SizedBox(
                        height: 16,
                      ),
                      ElevatedButton(
                        onPressed: _editAppartement,
                        child: Text('Edit Appartement'),
                      ),
                    ],
                  ),
                ),
              ),
            ),
    );
  }
}
