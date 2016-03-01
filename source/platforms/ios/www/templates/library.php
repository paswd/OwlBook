<ion-view view-title="Библиотека">
  <ion-content>
    <ion-list>
    	<div style="margin-left:100px;">
    	<script language="php">
    		echo "Hello world1";
    	</script><br>
		Hello world2<br>
		</div>
      <ion-item ng-repeat="book in library" href="#/app/library/{{book.id}}">
        {{book.title}}
      </ion-item>
    </ion-list>
  </ion-content>
</ion-view>
