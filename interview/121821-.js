1.
```
https://www.codingame.com/training/expert/the-lucky-number
A lucky number is a 10-based number, which has at least a "6" or an "8" in its digits. 
However, if it has "6" and "8" at the same time, then the number is NOT lucky. 
For example, "16", "38", "666" are lucky numbers, while "234" , "687" are not.
Now we want to know how many lucky numbers (without leading zeroes) are there between L and R, inclusive?
```

2.
```
https://www.codingame.com/ide/puzzle/the-fastest (50 pts)
The program:
Your program must judge results of marathon runners and choose the best one.
The result of each runner is represented as HH:MM:SS, where HH is hours, MM is minutes and SS is seconds.
You are given N results and the smallest time is the best.
INPUT:
Line 1: a integer number N.
Next N lines: 8 characters, a time result.
OUTPUT:
The best result.
CONSTRAINTS:
0 < N ≤ 10
0 ≤ hours < 24
0 ≤ minutes < 60
0 ≤ seconds < 60
```

3.
```
Write a class limitedqueue which will implement a limited queue of objects. 
The queue is just a normal queue that can accept up to N elements only. 
If any elements go beyond the limited N of the queue each additional item accepted will make the oldest element be removed. 
I have to include a constructor, add, remove, getLimit and size methods.
Constructor accepts int n which determines our limit
add will accept an object to add to the end of our queue after removing an object if necessary
remove must remove the oldest object from the queue and then return that element
size must return the number of elements in our queue
getLmit must return the maximum number that our queue can hold.
This must be done in Java if possible.
```
