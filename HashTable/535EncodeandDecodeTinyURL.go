package main

import "strconv"

type Codec struct {
	urlMap map[string]string
	target int
}

func Constructor() Codec {
	return Codec{
		urlMap: make(map[string]string),
		target: 1,
	}
}

// Encodes a URL to a shortened URL.
func (this *Codec) encode(longUrl string) string {
	shortUrl := "http://tinyurl.com/" + strconv.Itoa(this.target)
	this.urlMap[shortUrl] = longUrl
	this.target++
	return shortUrl
}

// Decodes a shortened URL to its original URL.
func (this *Codec) decode(shortUrl string) string {
	return this.urlMap[shortUrl]
}

/**
 * Your Codec object will be instantiated and called as such:
 * obj := Constructor();
 * url := obj.encode(longUrl);
 * ans := obj.decode(url);
 */

func main() {

}
