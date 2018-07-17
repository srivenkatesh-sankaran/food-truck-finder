For the given system to be a web application it has to be both scalable and have a good performance. A full blown
web application will require the system to be able to perform multiple user requests efficiently.

One such way of ensuring that, is by making multiple small pages or bursts of requests from the application. Since a web application
has high probability of including assets such as images, fonts and so on, it is important that the response time
for the user action remains within 'acceptable-levels'. This can be done by serving small but considerable amount of data
per each call and making the request as and when they are required. Another way to improve performance of the application is by
caching the requests. This can be done by understanding the user requests, when there are multiple requests for the same time, then
it makes sense to cache the response for the request and serve the subsequent ones from the cache. The cache design can also be further improved
by understanding the data. From a quick glance, it can be seen that the food truck schedules does not change within hour intervals.
This means the results at 10 AM on a given day will most likely be the same for 10:05 AM or 10:15AM and so on. It would make
sense to use a cache to avoid multiple calls to the service resulting in fetching redundant data.

The scalability of the system comes down to how it can be scaled from few requests from a single user to serving several requests
from multiple users efficiently. The web application could be giving results for a large area than just a city or it could be designed
in such a way to display the results in a map view and will show points of food trucks as the user moves, zooms in or zooms out in the map.
This could quickly result in a huge number of requests requesting large amounts of data. In such cases, scalability can be improved
by increased performance. For an example, if the service has a limited capability to serve its requests. In that case, it
would be efficient to process multiple small requests rather than having a high latency request blocking up the entire queue.
Using a cache also improves the scalability of the system. Another advantage of using a cache is that it could lead to lesser number
of hits on a server, and this will be much needed when accessing APIs that bill based on the number of hits or requests.