build:
	find css -name '*-marketing-custom2.min.css' -exec rm -f {} +
	lessc -x css/marketing-custom2.css css/marketing-custom2.min.css
	mv css/marketing-custom2.min.css css/`md5 -q css/marketing-custom2.min.css`-marketing-custom2.min.css
	find css -name '*-marketing-custom2.min.css'
	find css -name '*-marketing-webkit.min.css' -exec rm -f {} +
	lessc -x css/marketing-anim-webkit.css css/marketing-anim-webkit.min.css
	mv css/marketing-anim-webkit.min.css css/`md5 -q css/marketing-anim-webkit.min.css`-marketing-webkit.min.css
	find css -name '*-marketing-webkit.min.css'
	make -C ../slides build
	cp ../slides/*-slides.min.js js/
	cleancss css/hipchat.css -o css/hipchat.min.css
	echo `md5 -q css/hipchat.min.css`-hipchat.min.css
	mv css/hipchat.min.css css/`md5 -q css/hipchat.min.css`-hipchat.min.css
