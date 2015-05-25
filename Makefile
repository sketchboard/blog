build:
	find css -name '*-marketing-custom2.min.css' -exec rm -f {} +
	lessc -x css/marketing-custom2.css css/marketing-custom2.min.css
	mv css/marketing-custom2.min.css css/`md5 -q css/marketing-custom2.min.css`-marketing-custom2.min.css
	find css -name '*-marketing-custom2.min.css'
	find css -name '*-marketing-webkit.min.css' -exec rm -f {} +
	lessc -x css/marketing-anim-webkit.css css/marketing-anim-webkit.min.css
	mv css/marketing-anim-webkit.min.css css/`md5 -q css/marketing-anim-webkit.min.css`-marketing-webkit.min.css
	find css -name '*-marketing-webkit.min.css'