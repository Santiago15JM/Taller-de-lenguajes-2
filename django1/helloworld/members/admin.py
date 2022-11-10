from django.contrib import admin
from .models import Members 

# admin.site.register(Members)
@admin.register(Members)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('firstname', 'lastname')
    ordering = ('firstname',)
    search_fields = ('firstname', 'lastname')
