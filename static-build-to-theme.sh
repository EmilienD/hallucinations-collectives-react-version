cd build
mv index.html front-page.php

echo "<?php

require 'front-page.php';
" > index.php

cp ../functions.php .
cp ../style.css .

zip -r ../hc.zip *
