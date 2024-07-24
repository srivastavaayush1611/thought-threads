 #include <iostream>
 using namespace std;
 void copy (int& a, int& b, int& c)
 {
 a *=1;
 b *= 2;
 c *= 3;
 }
 int main ()
 {
int x =1, y = 5, z = 7;
copy (x, y, z);
cout << "x =" << x << ", y =" << y << ", z =" << x;
 return 0;
 }