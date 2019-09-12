cd build
mv index.html front-page.php

sed -i 's/<\/head>/<?php include "header.php" ?><\/head>/g' front-page.php

echo "<?php

require 'front-page.php';
" > index.php

cp ../functions.php .
cp ../style.css .
cp ../header.php .

zip -r ../hc.zip *
