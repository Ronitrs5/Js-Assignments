#include "exceptionHandling.hpp"
using namespace std;

void function(){
    throw ReferenceError();
}

int main(){

    HandleException handleException;

    try
    {
        function();
    }
    catch(const Exception &e)
    {
        handleException.handleException(e);
    }
    
}
