//Include guards
#ifndef Err_HPP
#define Err_HPP

#include<iostream>
using namespace std;

//interface
class Exception{
    public:
    virtual string showException() const = 0;
};

//class for handling errors via API i.e functions
class HandleException : public Exception{
    public:
    void handleException(const Exception &e){
        cout<<e.showException();
    }

    string showException() const override{
        return "Default exception thrown";
    }
};


//Below are some error functions
class NullPointerException : public Exception{
    public:
    string showException() const override{
        return "You are address to a memory that is not present/allocated.";
    }
};

class OutOfBoundsError : public Exception{
    public:
    string showException() const override{
        return "You are trying to access an element which is out of range of the array.";
    }
};

class RuntimeException : public Exception{
    public:
    string showException() const override{
        return "There was a runtime exception.";
    }
};

class ReferenceError : public Exception{
    public:
    string showException() const override{
        return "Reference error.";
    }
};

#endif Err_HPP
